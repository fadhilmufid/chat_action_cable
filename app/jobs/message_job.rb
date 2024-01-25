class MessageJob < ApplicationJob
  queue_as :default
  def perform(service, message)
    case service
    when "send_message"
        Message::SendMessage.new(message).perform
    else
    end
  end
end