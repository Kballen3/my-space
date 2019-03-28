30.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    avatar = Faker::Avatar.image(first_name, '50x200', 'png', 'set1')
    Friend.create(first_name: first_name, last_name: last_name, avatar: avatar, )
end

puts "friend list created"