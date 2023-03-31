package cinema;

public class Cinema {
    private int age;
    private double cost;

    //constructor
    public Cinema() {

    }
//compute
public void compute()
{
    if(age < 5)
    {
        cost = 0.0;
    }
    else if(age >= 5 && age <= 14)
    {
        cost = 5.0;
    }
    else if(age >= 15 && age <= 65)
    {
        cost = 10.0;
    } else 
    {
        cost = 0.0;
    }
    
  }

  //setter
  public void setAge(int age)
  {
      this.age = age;
  }

  //getter
  public double getCost()
  {
      return cost;
  }
}
