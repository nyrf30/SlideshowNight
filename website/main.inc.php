<?php
if (!isset($_SESSION['login'])) {
?>
  <h2>Please login to the Slideshow Night Website</h2><br>
  <form name="login" action="index.php" method="post">
    <label>Password:</label>
    <input type="text" name="password" size="20">
    <br>
    <br>
    <input type="submit" value="Login">
    <input type="hidden" name="content" value="validate">
  </form>
<?php
} else {
  $password = $_SESSION['password'];
  echo "fuck you $password";
?>
   <br><br>
   <a href="index.php?content=logout"><strong>Logout</strong></a>
<?php
}
?>