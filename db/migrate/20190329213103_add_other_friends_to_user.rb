class AddOtherFriendsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :other_friends, :text
  end
end
