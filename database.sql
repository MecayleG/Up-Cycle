drop table if exists materials, locations;

create table materials(
    id serial not null primary key,
    material_name text not null,
    price_per_kilogram decimal not null
    
);



create table locations(
    id serial not null primary key,
    name_of_place text not null,
    address_line text not null
);


insert into materials (material_name, price_per_kilogram) values ('Paper', 2.24);
insert into materials (material_name, price_per_kilogram) values ('Glass', 3.24);
insert into materials (material_name, price_per_kilogram) values ('Metal', 2.15);
insert into materials (material_name, price_per_kilogram) values ('Cans', 2.87);
insert into materials (material_name, price_per_kilogram) values ('Cardboard', 2.11);
insert into materials (material_name, price_per_kilogram) values ('Plastic', 3.24);


