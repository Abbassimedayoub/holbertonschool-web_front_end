function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function (){
            return seat
        }
    }
    const studentSeat = []
    for (let i=0; i < numbersOfStudents ; i++) {
        students.push(studentSeat(i + 1))
    }
    return students

}
classRoom = createClassRoom(10)