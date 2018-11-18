import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://example.selenium.jp/reserveApp_Renewal/`;


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