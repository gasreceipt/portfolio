-- Create the projects table if it doesn't exist
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  tags text[] default '{}'::text[],
  "imageUrl" text,
  link text,
  date date
);

-- Enable Row Level Security (RLS)
alter table public.projects enable row level security;

-- Create a policy that allows everyone to read data (if not exists)
do $$
begin
  if not exists (
    select 1 from pg_policies where tablename = 'projects' and policyname = 'Enable read access for all users'
  ) then
    create policy "Enable read access for all users"
      on public.projects
      for select
      using (true);
  end if;
end
$$;

-- Clear existing data
truncate table public.projects;

-- Insert new data
insert into public.projects (title, description, tags, "imageUrl", link, date)
values
  -- Core Ecosystem
  ('vsmpl.co', 'Parent company and IDE landing page', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=vsmpl.co', 'https://vsmpl.co', '2024-12-01'),
  ('smpl.today', 'Stone IDE landing site', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=smpl.today', 'https://smpl.today', '2024-11-30'),
  ('niroux.com', 'Neural AI prediction company', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=niroux.com', 'https://niroux.com', '2024-11-29'),
  ('trainer.tools', 'AI research and trainer assistant tool', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=trainer.tools', 'https://trainer.tools', '2024-11-28'),
  ('softform.dev', 'Development platform combining vScript with Stone IDE', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=softform.dev', 'https://softform.dev', '2024-11-27'),
  ('0ath.io', 'Authorization service for vsmpl.co using vScript', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=0ath.io', 'https://0ath.io', '2024-11-26'),
  ('rep0.us', 'Version control system designed for ideas instead of code', ARRAY['Core Ecosystem'], 'https://placehold.co/800x500/000000/FFFFFF?text=rep0.us', 'https://rep0.us', '2024-11-25'),

  -- AI & Tools
  ('map.taxi', 'Uber/Lyft price comparison utility', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=map.taxi', 'https://map.taxi', '2024-11-24'),
  ('foundry.name', 'Crowdsourced investment app', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=foundry.name', 'https://foundry.name', '2024-11-23'),
  ('already.ink', 'Certified image/sticker system', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=already.ink', 'https://already.ink', '2024-11-22'),
  ('cartel.wiki', 'Wiki-based game universe', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=cartel.wiki', 'https://cartel.wiki', '2024-11-21'),
  ('gasreceipt.xyz', 'Art project', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=gasreceipt.xyz', 'https://gasreceipt.xyz', '2024-11-20'),
  ('already.work', 'Compression tool using 9dot sigil technology', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=already.work', 'https://already.work', '2024-11-19'),
  ('gylph.com', 'Text manipulation tool for typography and character transformation', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=gylph.com', 'https://gylph.com', '2024-11-18'),
  ('payme.rent', 'Bill-splitting service for roommates and friend groups', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=payme.rent', 'https://payme.rent', '2024-11-17'),
  ('error.solutions', 'Collection of web errors presented as a fun archive', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=error.solutions', 'https://error.solutions', '2024-11-16'),
  ('c00lshit.com', 'Directory of interesting and lesser-known websites', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=c00lshit.com', 'https://c00lshit.com', '2024-11-15'),
  ('stack.ceo', 'Productivity platform with tools for CEOs', ARRAY['AI & Tools'], 'https://placehold.co/800x500/000000/FFFFFF?text=stack.ceo', 'https://stack.ceo', '2024-11-14'),

  -- Creative Experiments
  ('catnipboard.co', 'Niche skate company', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=catnipboard.co', 'https://catnipboard.co', '2024-11-13'),
  ('swipe.golf', 'Golfwear brand', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=swipe.golf', 'https://swipe.golf', '2024-11-12'),
  ('dogtag.beer', 'Beer brand', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=dogtag.beer', 'https://dogtag.beer', '2024-11-11'),
  ('lostco.shop', 'Clothing brand', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=lostco.shop', 'https://lostco.shop', '2024-11-10'),
  ('mypulse.life', 'Smart water bottle and hydration tracker', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=mypulse.life', 'https://mypulse.life', '2024-11-09'),
  ('kindle.la', 'Consulting firm', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=kindle.la', 'https://kindle.la', '2024-11-08'),
  ('badarctic.co', 'Jewelry brand offering handcrafted pieces', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=badarctic.co', 'https://badarctic.co', '2024-11-07'),
  ('ever.beer', 'Non-alcoholic beer brand', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=ever.beer', 'https://ever.beer', '2024-11-06'),
  ('vault.dog', 'Social platform for sharing photos of dogs', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=vault.dog', 'https://vault.dog', '2024-11-05'),
  ('error.ltd', 'Digital art gallery exploring glitch aesthetics', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=error.ltd', 'https://error.ltd', '2024-11-04'),
  ('uraveragejoe.xyz', 'Portfolio website for model Joe L. Coil', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=uraveragejoe.xyz', 'https://uraveragejoe.xyz', '2024-11-03'),
  ('aready.ink', 'Minimal digital journal for daily writing', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=aready.ink', 'https://aready.ink', '2024-11-02'),
  ('jim.mobi', 'Fitness service that sends witty workout reminders', ARRAY['Creative Experiments'], 'https://placehold.co/800x500/000000/FFFFFF?text=jim.mobi', 'https://jim.mobi', '2024-11-01');
