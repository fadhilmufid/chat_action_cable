class SendMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    html = ApplicationController.render(
      partial: 'messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast "chat_room_channel_#{message.chat_room_id}", { message: message, html: html}
  end
end