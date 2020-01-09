var assert = {
  isTrue: function(expected) {
    if (!expected) {
      throw new Error("Assertion failed: " + expected + " is not truthy");
    }
  }
}
