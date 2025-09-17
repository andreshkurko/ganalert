create extension if not exists "uuid-ossp";

create table if not exists kindergartens (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  spots_available int default 0,
  city text,
  created_at timestamp default now()
);

create table if not exists parents (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  premium boolean default false
);

create table if not exists waitlists (
  id uuid primary key default uuid_generate_v4(),
  parent_id uuid references parents(id),
  kindergarten_id uuid references kindergartens(id),
  created_at timestamp default now()
);

