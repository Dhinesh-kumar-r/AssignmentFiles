// export const Component = () => {
//   return (
//     <div>Hai</div>
//   )
// }


export const Header = () => {
    let custom_css = "code";
    const isLoggedIn = false;
    const greeting = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>;
    const items = ["item1", "item2", "item3", "item4"];
    return (
      // JSX Fragement
      <>
        <div>
          <h1 className="bannerText">Bable example</h1>
          <p className="slogan">Learn more be smart</p>
          {/* Javascript expression in JSX */}
          <p
            className={custom_css}
            style={{ fontSize: "25px", fontStyle: "italic" }}
          >
            {" "}
            25 + 50 = {25 + 50}{" "}
          </p>
          {/* JSX with Conditional Rendering */}
          {greeting}
  
          {/* JSX with List */}
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

