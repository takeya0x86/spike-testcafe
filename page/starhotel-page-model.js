import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.datePick = Selector('#datePick');
    this.guestName = Selector('#guestname');
    this.reserveTermSelect = Selector('#reserve_term');
    this.reserveTermOption = this.reserveTermSelect.find('option');
    this.headcountSelect = Selector('#headcount');
    this.headcountOption = this.headcountSelect.find('option');
    this.breakfastOff = Selector('#breakfast_off');
    this.planA = Selector('#plan_a');
    this.planB = Selector('#plan_b');
    this.agreeAndGotoNext = Selector('#agree_and_goto_next');
    this.price = Selector('#price');
  }
}