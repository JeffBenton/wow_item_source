# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Azerite.destroy_all

Azerite.create(
  name: "Sea-Brawler's Greathelm",
  source: "Dungeon",
  tier_four: ["Bastion of Might", "Callous Reprisal", "Pulverizing Blows", "Simmering Rage", "Test of Might", "Crushing Assault"],
  tier_three: [ "Deafening Crash", "Cold Steel, Hot Blood", "Lord of War", "Dagger in the Back"],
  tier_two: ["Earthlink", "Azerite Globules", "Shimmering Haven"],
  tier_one: ["Resounding Protection", "Vampiric Speed"],
  character_class: "Warrior"
)