drop table if exists recycle;

create table material (
    id  serial not null primary key,
    material text not null,
    price_per_gram decimal not null,
);



create table locations (
    id  serial not null primary key,
    name_of_place text not null,
    address_line text not null,
    co_ordinates text not null
);