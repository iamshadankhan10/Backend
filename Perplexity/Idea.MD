====================== PerPlexity ======================

Feature List :
-Authentication system
- Chat with AI
- Chat history
- Message Storage
- AI with internet research feature



User :
_id
username
email
password
verified (by default False) -> email same hoga tabhi verified hoga (Link send hoga mail pe)
createdAt
updatedAt

Chat:
__id
user -> ref : User
title
createdAt
updatedAt

Message:
_id
kis chat ka hai -> ref : Chat
sender (User or AI)
content
createdAt
updatedAt