drop table if exists materials,
locations;
create table materials(
    id serial not null primary key,
    material_name text not null,
    price_per_kilogram decimal not null
);
create table locations(
    id serial not null primary key,
    name_of_place varchar not null,
    address_line varchar not null,
    latitude DECIMAL not null,
    longitude decimal not null
);
--  ('-33.9734624', 18.5428407)
insert into materials (material_name, price_per_kilogram)
values ('Paper', 2.24);
insert into materials (material_name, price_per_kilogram)
values ('Glass', 3.24);
insert into materials (material_name, price_per_kilogram)
values ('Metal', 2.15);
insert into materials (material_name, price_per_kilogram)
values ('Cans', 2.87);
insert into materials (material_name, price_per_kilogram)
values ('Cardboard', 2.11);
insert into materials (material_name, price_per_kilogram)
values ('Plastic', 3.24);
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Johencar Transport and Recycling cc',
        '32 Dynamo Way, Blackheath, Cape Town, 7580',
        -33.9734624,
        18.5428407
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Recycle 1st',
        'unit 5, 22 Losack Ave, Epping, Cape Town, 7475',
        -33.6587452,
        18.5452874
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Myplas (Pty) Ltd',
        '6 Mill Rd, Bellville South, Cape Town, 7530',
        -33.9412816,
        18.5952874
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Biogreen Cape',
        '4 Luxmi St, Sand Industria, Cape Town, 7767',
        -33.970865,
        18.5276349
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'L&B RECYCLING',
        'Tide St, Woodstock, Cape Town, 7925',
        -33.9195729,
        18.4259962
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Retreat Recycling And Waste Drop-off',
        '61 10th Ave, Cafda Village, Cape Town, 7965',
        -34.0037386,
        18.4438764
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Waste Carriers',
        'Weltevreden Rd, Philippi, Cape Town, 7785',
        -33.98392,
        18.5137102
    );
insert into locations (name_of_place, address_line, latitude, longitude)
values (
        'Clearer Conscience',
        'Mill St, Gardens, Cape Town 8001',
        -33.933626,
        18.4032583
    );