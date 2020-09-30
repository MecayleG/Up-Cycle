drop table if exists recycle;

create table recycle (
    id  serial not null primary key,
    material text not null,
    price decimal not null,
    quantity int not null
);
