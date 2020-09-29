drop table if exists recycle;

create table recycle (
    id  serial not null primary key,
    material text not null,
    price(per kg) int not null,
    quantity int not null
);
