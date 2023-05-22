$(
  function() {
      const name = $('#name')
      const gender = $('#gender')
      const beonho = $('#beonho')

      const print = $('#print')
      const reset = $('#reset')
      const printOrderBy = $('#printOrderBy')
      const information = $('#information')

      //모든 정보 날리는 함수
      function resetInfo() {
          information.text('')
      }

      reset.on('click', function(){
          resetInfo() //information 태그 안에 있는 내용도 초기화
          students = [] //배열도 초기화함
      })

      print.click(function(){
          //val() = input태그의 value 값
          //js에선 value라고 썼지만 jQuery에선 val()로 불러옴
          const student = new Student
          (name.val(),gender.val(),Number(beonho.val()))
          let newStudentInfo = $('<h1></h1>')
          newStudentInfo.text(student.toString())
          if(student.gender=='남')
          {
              newStudentInfo.css('background-color','cyan')
              .css('color','blue')
          }
          else if(student.gender=='여')
          {
              newStudentInfo.css('background-color','pink')
              .css('color','red')
          }
          else 
          {
              newStudentInfo.css('border','1px solid black')
          }
          information.append(newStudentInfo)
      })
      printOrderBy.on('click', function(){
          const idx = students.findIndex(function(item){
              return item.beonho === Number(beonho.val())
          })
      })
      if(idx!= -1)
      {
          alert('중복된 번호입니다')
          return
      }
      resetInfo()
      students.push(new Student(name.val(), gender.val(), Number(beonho.val())))
   //오름차순 정렬 코드
   students.sort(function(a,b){
      return a.beonho-b.beonho
   })
   for (const item of students) 
   {
      let newStudentInfo = $('<h1></h1>')
      newStudentInfo.text(item.toString())
      if(item.gender=='남'||item.gender=='남자'||item.gender=='男'||item.gender=='man')
      {
          newStudentInfo.css('background-color','cyan')
              .css('color','blue')
      }
      else if(item.gender=='여'||item.gender=='여자'||item.gender=='女'||item.gender=='woman')
      {
          newStudentInfo.css('background-color','pink')
          .css('color','red')
      }
      else 
      {
          newStudentInfo.css('border','1px solid black')
      }
      information.append(newStudentInfo)
      
   }
  }
)