//function studentGrade { // lets defIne a variable to be StudentGrade and value to be 100
    // lets grade the student mark between 0 and 100
    //let grade = 100;
    // make sure the grade mark is a valid number and within 0 to 100
    // lets determine the grade based on the marks scrode by the student.
    function    studentGrade(score){
        if (score<0 || score> 100){
            console.log('invalid input');
            return
        }
        let grade;
        if(score> 79){
            grade='A'
        }
        else if (score>= 60){
            grade='B'
        }
        else if (score>= 49){
            grade='C'
        } else if(score>= 40){
            grade='D'
        }
        else{
            grade='E'
        }
        return  grade;
    } 
    console.log(studentGrade(85))