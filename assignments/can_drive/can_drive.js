function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if (!hasDrivingLiscence) {
        return "You cannot drive"
    }
    if (hasDrivingLiscence && !isTired && isSober) {
        return "You can drive"
    }
    return "You shouldn't drive"
}
    


    // Write you code here


module.exports = CanDrive;
