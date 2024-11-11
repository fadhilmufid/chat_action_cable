class Message < ApplicationRecord
    after_create :add_message
    def add_message
        MessageJob.set(wait: 5.seconds).perform_later("send_message", self)
    end
end
