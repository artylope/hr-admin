var React = require("react");

class Main extends React.Component {
  render() {
    {/*code here*/}
    return (
      <html lang="en">
      <head>
        <title>HR Portal</title>
        <meta name="description" content="HR Portal"/>
        <meta name="author" content="Artylope"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"/>
        {/*<link rel="stylesheet" href="css/flexboxgrid.css"/>*/}
        <link rel="stylesheet" href="../css/style.css"/>

      </head>
      <body>
        { this.props.children }
        <script src="../js/feather.js"></script>
        <script>
          feather.replace()
        </script>
      </body>
      </html>




    );
  }
}

module.exports = Main;
