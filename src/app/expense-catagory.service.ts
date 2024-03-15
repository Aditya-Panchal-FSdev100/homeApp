import { Injectable } from '@angular/core';
import { ExpenseCatagory } from './expense-catagory';
@Injectable({
  providedIn: 'root'
})
export class ExpenseCatagoryService {


  protected catagoryList: ExpenseCatagory[] = [
    {
      id: 0,
      catagoryName: 'education'
    }
    ,
    {
      id: 1,
      catagoryName: 'travel'
    },
    {
      id: 2,
      catagoryName: 'food'
    }]

  getAllcatagoryList(): ExpenseCatagory[] {
    return this.catagoryList;
  }

  getCatagoryNamebyId(id: number): ExpenseCatagory | undefined {
    undefined
    return this.catagoryList.find(catagoryList =>
      catagoryList.id === id);
  }

  submitApplication(catagoryName: string, Amount: string, userId: number) {
    alert("your catagory  Name  : " + catagoryName +
      "\n" +
      "your last Amount:" + Amount + "\n" +
      "Your userId:" + userId)
  }
}
