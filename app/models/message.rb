class Message < ApplicationRecord
    after_create :add_message
    def add_message
        SendMessageJob.perform_now(self)
    end
end
