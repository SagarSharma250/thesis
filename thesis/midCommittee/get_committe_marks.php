<?php
 header("Access-Control-Allow-Origin: *");
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];





$query="SELECT *,teacher_table.teachername FROM mid_committee_marks,teacher_table where mid_committee_marks.id='$id' AND mid_committee_marks.Teacherid=teacher_table.Teacherid";
$studentinfo=array();

if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $studentinfo[$count]['id']=$row['mid_com_marksid'];
      $studentinfo[$count]['teacherid']=$row['Teacherid'];
    $studentinfo[$count]['teacher']=$row['teachername'];
    $studentinfo[$count]['cat1']=$row['Quality_of_presentation'];
  $studentinfo[$count]['cat2']=$row['ProblemFormulation_identification_conceptualization'];
  $studentinfo[$count]['cat3']=$row['Methodology_Approach'];
  $studentinfo[$count]['cat4']=$row['Literature_review'];
  $studentinfo[$count]['cat5']=$row['Understanding_of_thesiswork_and_relatedtheory'];
$studentinfo[$count]['cat6']=$row['AnsweringQuestions'];
$studentinfo[$count]['cat7']=$row['Completeness_of_thesis_work'];
$studentinfo[$count]['cat8']=$row['Planning_of_organization_of_thesiswork'];
    $studentinfo[$count]['total']=$row['total'];
    $count++;
  }
  echo json_encode($studentinfo);
}
else {

  http_response_code(404);
}





 ?>
