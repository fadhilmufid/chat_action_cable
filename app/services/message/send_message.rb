class Message::SendMessage 
    def initialize(message)
        @message = message
    end

    def perform
        html = ApplicationController.render(
        partial: 'messages/message',
        locals: { message: @message }
        )
        ActionCable.server.broadcast "chat_room_channel_#{@message.chat_room_id}", { message: @message, html: html}
    end
end