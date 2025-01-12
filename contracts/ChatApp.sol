/* Data Structures:
user: A structure representing a user, containing their name and a list of friends.

friend: A structure representing a friend of a user, containing their Ethereum public key (address) and name.

message: A structure representing a message, containing the sender's address, timestamp, and the message content.

AllUserStruct: A structure representing all users, containing their name and Ethereum account address.

State Variables:
getAllUsers: An array containing information about all registered users.

userList: A mapping of user addresses to user structures, storing user data.

allMessages: A mapping of chat codes (computed from user addresses) to arrays of messages, storing all messages exchanged between users.

Functions:
checkUserExists: Checks if a user exists based on their Ethereum public key.

createAccount: Creates an account for a user with the provided name.

getUsername: Retrieves the username associated with a given Ethereum public key.

addFriend: Adds a friend for the calling user and the provided friend's public key.

getMyFriendList: Retrieves the list of friends for the calling user.

sendMessage: Sends a message from the calling user to a friend specified by their public key.

readMessage: Retrieves all messages exchanged between the calling user and a friend specified by their public key.

getAllAppUsers: Retrieves information about all registered users.

Internal Functions:
_addFriend: Internal function to add a friend to the friend list of a user.

_getChatCode: Internal function to compute a unique chat code based on the two users' public keys.
*/
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract ChatApp {
    struct user {
        string name;
        friend[] friendList;
    }

    struct friend {
        address pubkey;
        string name;
    }

    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    }

    struct AllUserStruct {
        string name;
        address accountAddress;
    }

    AllUserStruct[] public getAllUsers;

    mapping(address => user) public userList;
    mapping(bytes32 => message[]) public allMessages;

    //Function to check user exits
    function checkUserExists(address pubkey) public view returns(bool) {
        return bytes(userList[pubkey].name).length > 0;
    }
    
    //Function to create account
    function createAccount(string calldata name) external {
        require(!checkUserExists(msg.sender), "User already exists");
        require(bytes(name).length > 0, "Username cannot be empty");

        userList[msg.sender].name = name;
        getAllUsers.push(AllUserStruct(name, msg.sender));
    }

    //Function to get username
    function getUsername(address pubkey) external view returns(string memory) {
        require(checkUserExists(pubkey), "User is not registeres");
        return userList[pubkey].name;
    }

    //Function to add a friend
    function addFriend(address friend_key, string calldata name) external {
        require(checkUserExists(msg.sender), "Create an account first");
        require(checkUserExists(friend_key), "User is not registered");
        require(msg.sender != friend_key, "User cannot add themselves as friends");
        require(checkAlreadyFriends(msg.sender, friend_key) == false, "These users are already friends");

        _addFriend(msg.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }

    //Function to check already friends(checkAlreadyFriends)
    function checkAlreadyFriends(address pubkey1, address pubkey2) internal view returns(bool) {
        if (userList[pubkey1].friendList.length > userList[pubkey2].friendList.length) {
           address tmp = pubkey1;
           pubkey1 = pubkey2;
           pubkey2 = tmp;
        }

        for (uint256 i = 0; i < userList[pubkey1].friendList.length; i++) {
            if (userList[pubkey1].friendList[i].pubkey == pubkey2) {
                return true;
            }
        }
        return false;
    }
    
    //Function to add friend internal function(_addFriend)
    function _addFriend(address me, address friend_key, string memory name) internal {
       friend memory newFrind = friend(friend_key, name);
       userList[me].friendList.push(newFrind);
    }

    //Function to get my friend 
    function getMyFriendList() external view returns(friend[] memory){
        return userList[msg.sender].friendList;
    }

    //Function to get chat code (internal function)
    function _getChatCode(address pubkey1, address pubkey2) internal pure returns(bytes32) {
       if(pubkey1 < pubkey2)
       {
        return keccak256(abi.encodePacked(pubkey1, pubkey2));
       }
       else {
        return keccak256(abi.encodePacked(pubkey2, pubkey1));
       }
    }

    //Function to send message
    function sendMessage(address friend_key, string calldata _msg) external {
        require(checkUserExists(msg.sender), "Create an account first");
        require(checkUserExists(friend_key), "User is not registered");
        require(checkAlreadyFriends(msg.sender, friend_key), "You are not friends with the given user");

        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        message memory newMsg = message(msg.sender, block.timestamp, _msg);
        allMessages[chatCode].push(newMsg);
    }

    //Function to read message
    function readMessage(address friend_key) external view returns(message[] memory) {
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        return allMessages[chatCode];
    }

    function getAllAppUsers() public view returns(AllUserStruct[] memory) {
        return getAllUsers;
    }
}