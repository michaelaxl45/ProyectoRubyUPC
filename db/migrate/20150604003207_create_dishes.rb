class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.integer :dish_id
      t.string :name
      t.decimal :price
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
