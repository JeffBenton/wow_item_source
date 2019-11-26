# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Azerite.destroy_all
Weapon.destroy_all
Trinket.destroy_all

Azerite.create(
  name: "Sea-Brawler's Greathelm",
  slot: "Head",
  source: "Dungeon",
  tier_four: ["Bastion of Might", "Callous Reprisal", "Pulverizing Blows", "Simmering Rage", "Test of Might", "Crushing Assault"],
  tier_three: ["Deafening Crash", "Cold Steel, Hot Blood", "Lord of War", "Dagger in the Back"],
  tier_two: ["Earthlink", "Azerite Globules", "Shimmering Haven"],
  tier_one: ["Resounding Protection", "Vampiric Speed"],
  character_class: "Warrior"
)

Azerite.create(
  name: "Trench Tyrant's Shoulderplates",
  slot: "Shoulder",
  source: "Raid",
  tier_four: ["Bloodsport", "Brace for Impact", "Cold Steel, Hot Blood", "Infinite Fury", "Gathering Storm", "Seismic Wave"],
  tier_three: ["Iron Fortress", "Reckless Flurry", "Lord of War", "Loyal to the End"],
  tier_two: ["Overwheling Power", "Earthlink", "Crystalline Carapace"],
  tier_one: ["Intimidating Presence", "Bulwark of the Masses"],
  character_class: "Warrior"
)

Azerite.create(
    name: "Dark Passenger's Breastplate",
    slot: "Chest",
    source: "Raid",
    tier_four: ["Iron Fortress", "Deafening Crash", "Unbridled Ferocity", "Reckless Flurry", "Lord of War", "Striking the Anvil"],
    tier_three: ["Bastion of Might", "Pulverizing Blows", "Test of Might", "Loyal to the End"],
    tier_two: ["Overwhelming Power", "Gutripper", "Azerite Veins"],
    tier_one: ["Resounding Protection", "Self Reliance"],
    character_class: "Warrior"
)

Azerite.create(
    name: "Circlet of the Enveloping Leviathan",
    slot: "Head",
    source: "Dungeon",
    tier_four: ["Furious Gaze", "Seething Power", "Infernal Armor", "Hour of Reaping"],
    tier_three: ["Meticulous Scheming", "Chaotic Transformation", "Essence Sever"],
    tier_two: ["Earthlink", "Overwhelming Power", "Azerite Veins"],
    tier_one: ["Resounding Protection", "Impassive Visage"],
    character_class: "Demon Hunter"
)
Azerite.create(
    name: "Gorak Tul's Mantle",
    slot: "Shoulder",
    source: "Dungeon",
    tier_four: ["Revolving Blades", "Eyes of Rage", "Revel in Pain", "Essence Sever"],
    tier_three: ["Blightborne Infusion", "Chaotic Transformation", "Hour of Reaping"],
    tier_two: ["Unstable Flames", "Elemental Whirl", "Shimmering Haven"],
    tier_one: ["Soulmonger", "Self Reliance"],
    character_class: "Demon Hunter"
)
Azerite.create(
    name: "Blackwater Shimmerscale Vest",
    slot: "Chest",
    source: "Raid",
    tier_four: ["Furious Gaze", "Seething Power", "Infernal Armor", "Hour of Reaping"],
    tier_three: ["Loyal to the End", "Eyes of Rage", "Essence Sever"],
    tier_two: ["Overwhelming Power", "Earthlink", "Azerite Veins"],
    tier_one: ["Thrive in Chaos", "Bulwark of the Masses"],
    character_class: "Demon Hunter"
)

Weapon.create(
    name: "Monstrosity's Shipbreaker",
    source: "Raid",
    zone: "The Eternal Palace",
    boss: "Radiance of Azshara",
    role: "Str 2h",
    weapon_type: "Two-Hand Mace"
)

Weapon.create(
    name: "Geti'ikku, Cut of Death",
    source: "Dungeon",
    zone: "Kings' Rest",
    boss: "Dazar, The First King",
    role: "Str 2h",
    weapon_type: "Two-Hand Sword"
)

Weapon.create(
    name: "Diver's Folly",
    source: "Raid",
    zone: "The Eternal Palace",
    boss: "Blackwater Behemoth",
    role: "Agi 1h",
    weapon_type: "One-Hand Axe"
)

Trinket.create(
    name: "Ashvane's Razor Coral",
    source: "Raid",
    zone: "The Eternal Palace",
    boss: "Lady Ashvane",
    role: "Str Dps"
)

Trinket.create(
    name: "Leviathan's Lure",
    source: "Raid",
    zone: "The Eternal Palace",
    boss: "Blackwater Behemoth",
    role: "Int Dps"
)

Trinket.create(
    name: "Azshara's Font of Power",
    source: "Raid",
    zone: "The Eternal Palace",
    boss: "Queen Azshara",
    role: "Heal"
)