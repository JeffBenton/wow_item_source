class CreateWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.string :source
      t.string :boss
      t.string :type

      t.timestamps
    end
  end
end
