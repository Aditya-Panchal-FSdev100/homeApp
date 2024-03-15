import { Component,Input, OnInit } from '@angular/core';
import { ExpenseCatagory } from '../expense-catagory';
import { CommonModule } from '@angular/common';
import { ExpenseCatagoryService } from '../expense-catagory.service';
@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {
  @Input() ExpenseCatagory!: ExpenseCatagory;
  //c, import
  CatList:any;
  constructor(private Expense_Service: ExpenseCatagoryService){
    
  }
  ngOnInit() {
    this.Expense_Service.getAllcatagoryList();
    console.log(JSON.stringify(this.Expense_Service.getAllcatagoryList()));
  }


}

