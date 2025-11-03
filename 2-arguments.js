function checkArgs(arg1, arg2, arg3) {
  if (arg1 || arg2 || arg3) {
    console.log("Argument found");
  } else if (!(arg1 && arg2 && arg3)) {
    console.log("No argument");
  } else {
    console.log("Argument found");
  }
}

checkArgs();
