class Message < ApplicationRecord
    after_create :add_message
    def add_message
        MessageJob.perform_now("send_message", self)
    end
end
