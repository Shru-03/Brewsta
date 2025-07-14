const FallingBeans = () => {
  const beans = Array.from({ length: 20 });

  return (
    <div className="bean-container">
      {beans.map((_, index) => (
        <img
          key={index}
          src="/coffee-bean.png"
          alt="coffee bean"
          className="falling-bean"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingBeans;
