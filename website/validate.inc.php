<?php
$password = $_POST['password'];
if ($password == 'Jesse') {
   echo "<h2>Welcome to Slideshow Night Website Jesse!</h2>\n";
   $_SESSION['login'] = true;
   $_SESSION['password'] = $password;
   header("Location: index.php");
} 
else if ($password == 'Andrew') {
   echo "<h2>Welcome to Slideshow Night Website Andrew!</h2>\n";
   $_SESSION['login'] = true;
   $_SESSION['password'] = $password;
   header("Location: index.php");
}
else if ($password == 'Evan') {
   echo "<h2>Welcome to Slideshow Night Website Evan!</h2>\n";
   $_SESSION['login'] = true;
   $_SESSION['password'] = $password;
   header("Location: index.php");
}
else if ($password == 'Colton') {
   echo "<h2>Welcome to Slideshow Night Website Colton!</h2>\n";
   $_SESSION['login'] = true;
   $_SESSION['password'] = $password;
   header("Location: index.php");
} 
else if ($password == 'Ben') {
   echo "<h2>Welcome to Slideshow Night Website Ben!</h2>\n";
   $_SESSION['login'] = true;
   $_SESSION['password'] = $password;
   header("Location: index.php");
}
else if ($password == 'Richard') {
   echo "<h2>Welcome to Slideshow Night Website Richard!</h2>\n";
   $_SESSION['login'] = true;
   $_SESSION['password'] = $password;
   header("Location: index.php");
} else {
   echo "<h2>Sorry, login to the Slideshow Night Website is incorrect</h2>\n";
   echo "<a href=\"index.php\">Please try again</a>\n";
}
?>