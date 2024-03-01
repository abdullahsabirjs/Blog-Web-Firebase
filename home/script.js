const logout = () => {
  auth.signOut().then(() => {
      console.log("User logged out successfully");
      // Redirect to the login page or display a message
  }).catch((error) => {
      console.error("Error logging out:", error);
  });
};
