drop table if exists materials

create table materials(
    id serial not null primary key,
    material_name text not null,
    price_per_kilogram decimal not null
);

insert into materials (material_name, price_per_kilogram)
values ('Paper', 2.10);
insert into materials (material_name, price_per_kilogram)
values ('Glass', 3.50);
insert into materials (material_name, price_per_kilogram)
values ('Metal', 9.91);
insert into materials (material_name, price_per_kilogram)
values ('Cans', 8);
insert into materials (material_name, price_per_kilogram)
values ('Cardboard', 2.50);
insert into materials (material_name, price_per_kilogram)
values ('Plastic', 3.10);
