function MainContent() {
  return (
    <main style={{ 
      backgroundColor: '#f2f2f2', 
      padding: '20px', 
      textAlign: 'left', 
      margin: '10px', 
      borderRadius: '8px' 
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>
        Welcome to My City Blog
      </h2>
      <p style={{ lineHeight: '1.6', color: '#555' }}>
        Here you'll find all my favorite cities, their culture, food, and attractions.
      </p>
    </main>
  );
}

export default MainContent;
