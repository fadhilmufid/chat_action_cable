import consumer from "channels/consumer";

function startSubscription() {
  consumer.subscriptions.subscriptions.forEach((subscription) => {
    consumer.subscriptions.remove(subscription);
  });

  function startChannel(chatRoomId) {
    if (chatRoomId != null) {
      consumer.subscriptions.create(
        // "ChatRoomChannel",
        { channel: "ChatRoomChannel", chat_room_id: chatRoomId },
        {
          connected() {
            // Called when the subscription is ready for use on the server
          },

          disconnected() {
            // Called when the subscription has been terminated by the server
          },

          received(data) {
            let html = data.html;
            let data_chat_room_id = data.message.chat_room_id;
            const messageContainer = document.getElementById(
              `messages-${data_chat_room_id}`
            );
            messageContainer.innerHTML = messageContainer.innerHTML + html;
            // Called when there's incoming data on the websocket for this channel
          },
        }
      );
    }
  }

  let chatRooms = document.querySelectorAll(
    `[data-chat-room-id^=chat-room-id]`
  );

  for (let chatRoom of chatRooms) {
    let chatRoomId;
    chatRoomId = chatRoom.dataset.value;
    startChannel(chatRoomId);
    // console.log(date.dataset.chatRoomId);
    // code block to be executed
  }
}

document.addEventListener("turbo:load", async function () {
  // chatRoomId = await getRoomId();
  // startSubscription(chatRoomId);
  startSubscription();
});

// window.onload = async function () {

//do something here
// };
