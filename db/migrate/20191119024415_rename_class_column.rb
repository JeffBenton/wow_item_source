class RenameClassColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :azerites, :class, :character_class
  end
end
