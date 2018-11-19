import { Selector } from 'testcafe';
import Page from '../page/starhotel-page-model.js';

fixture `Getting Started`
  .page `http://example.selenium.jp/reserveApp_Renewal/`;

const page = new Page();

const reserveTermSelect = Selector('#reserve_term');
const reserveTermOption = reserveTermSelect.find('option');
const headcountSelect = Selector('#headcount');
const headcountOption = headcountSelect.find('option');

test('Test STAR-HOTEL', async t => {
  await t 
    .typeText('#datePick', '2018/12/01')
    .typeText('#guestname', 'テスト太郎')
    .click(reserveTermSelect)
    .click(reserveTermOption.withExactText('2'))
    .click(headcountSelect)
    .click(headcountOption.withExactText('5'))
    .click('#breakfast_off')
    .click('#plan_a')
    .click('#plan_b')
    .click('#agree_and_goto_next')

    .expect(Selector('#price').innerText).eql('97500');
});

test('Test STAR-HOTEL with Page', async t => {
  await t
    .typeText(page.datePick, '2018/12/01')
    .typeText(page.guestName, 'テスト太郎')
    .click(page.reserveTermSelect)
    .click(page.reserveTermOption.withExactText('2'))
    .click(page.headcountSelect)
    .click(page.headcountOption.withExactText('5'))
    .click(page.breakfastOff)
    .click(page.planA)
    .click(page.planB)
    .click(page.agreeAndGotoNext)

    .expect(page.price.innerText).eql('97500');
});