CREATE TABLE libraries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  hours TEXT,
  policies TEXT,
  seating_capacity TEXT,
  noise_level TEXT,
  special_features TEXT
);

-- Sample data
INSERT INTO libraries (name, hours, policies, seating_capacity, noise_level, special_features) VALUES
('IKB', '8 AM - 10 PM', 'Silent floors, food allowed on first floor', 'High', 'Low', 'Heritage Reading Room'),
('Woodward', '9 AM - 9 PM', 'Science-focused, no food', 'Medium', 'Medium', 'Anatomy Models'),
('Education Library', '8:30 AM - 8 PM', 'Group study rooms, quiet zone', 'Low', 'Medium', 'Children’s books section');
