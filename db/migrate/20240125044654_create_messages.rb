class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.belongs_to :chat_room
      t.string :content
      t.timestamps
    end
  end
end
