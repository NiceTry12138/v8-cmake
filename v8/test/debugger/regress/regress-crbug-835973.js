// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Test that stepping works correctly with bytecode scaling prefix.
class MyClass { f(p) { this.x += p; } };

let obj = new MyClass();

function foo() {
  obj.f(0);
  obj.f(1);
  obj.f(2);
  obj.f(3);
  obj.f(4);
  obj.f(5);
  obj.f(6);
  obj.f(7);
  obj.f(8);
  obj.f(9);
  obj.f(10);
  obj.f(11);
  obj.f(12);
  obj.f(13);
  obj.f(14);
  obj.f(15);
  obj.f(16);
  obj.f(17);
  obj.f(18);
  obj.f(19);
  obj.f(20);
  obj.f(21);
  obj.f(22);
  obj.f(23);
  obj.f(24);
  obj.f(25);
  obj.f(26);
  obj.f(27);
  obj.f(28);
  obj.f(29);
  obj.f(30);
  obj.f(31);
  obj.f(32);
  obj.f(33);
  obj.f(34);
  obj.f(35);
  obj.f(36);
  obj.f(37);
  obj.f(38);
  obj.f(39);
  obj.f(40);
  obj.f(41);
  obj.f(42);
  obj.f(43);
  obj.f(44);
  obj.f(45);
  obj.f(46);
  obj.f(47);
  obj.f(48);
  obj.f(49);
  obj.f(50);
  obj.f(51);
  obj.f(52);
  obj.f(53);
  obj.f(54);
  obj.f(55);
  obj.f(56);
  obj.f(57);
  obj.f(58);
  obj.f(59);
  obj.f(60);
  obj.f(61);
  obj.f(62);
  obj.f(63);
  obj.f(64);
  obj.f(65);
  obj.f(66);
  obj.f(67);
  obj.f(68);
  obj.f(69);
  obj.f(70);
  obj.f(71);
  obj.f(72);
  obj.f(73);
  obj.f(74);
  obj.f(75);
  obj.f(76);
  obj.f(77);
  obj.f(78);
  obj.f(79);
  obj.f(80);
  obj.f(81);
  obj.f(82);
  obj.f(83);
  obj.f(84);
  obj.f(85);
  obj.f(86);
  obj.f(87);
  obj.f(88);
  obj.f(89);
  obj.f(90);
  obj.f(91);
  obj.f(92);
  obj.f(93);
  obj.f(94);
  obj.f(95);
  obj.f(96);
  obj.f(97);
  obj.f(98);
  obj.f(99);
  obj.f(100);
  obj.f(101);
  obj.f(102);
  obj.f(103);
  obj.f(104);
  obj.f(105);
  obj.f(106);
  obj.f(107);
  obj.f(108);
  obj.f(109);
  obj.f(110);
  obj.f(111);
  obj.f(112);
  obj.f(113);
  obj.f(114);
  obj.f(115);
  obj.f(116);
  obj.f(117);
  obj.f(118);
  obj.f(119);
  obj.f(120);
  obj.f(121);
  obj.f(122);
  obj.f(123);
  obj.f(124);
  obj.f(125);
  obj.f(126);
  obj.f(127);
  obj.f(128);
  obj.f(129);
  obj.f(130);
  obj.f(131);
  obj.f(132);
  obj.f(133);
  obj.f(134);
  obj.f(135);
  obj.f(136);
  obj.f(137);
  obj.f(138);
  obj.f(139);
  obj.f(140);
  obj.f(141);
  obj.f(142);
  obj.f(143);
  obj.f(144);
  obj.f(145);
  obj.f(146);
  obj.f(147);
  obj.f(148);
  obj.f(149);
  obj.f(150);
  obj.f(151);
  obj.f(152);
  obj.f(153);
  obj.f(154);
  obj.f(155);
  obj.f(156);
  obj.f(157);
  obj.f(158);
  obj.f(159);
  obj.f(160);
  obj.f(161);
  obj.f(162);
  obj.f(163);
  obj.f(164);
  obj.f(165);
  obj.f(166);
  obj.f(167);
  obj.f(168);
  obj.f(169);
  obj.f(170);
  obj.f(171);
  obj.f(172);
  obj.f(173);
  obj.f(174);
  obj.f(175);
  obj.f(176);
  obj.f(177);
  obj.f(178);
  obj.f(179);
  obj.f(180);
  obj.f(181);
  obj.f(182);
  obj.f(183);
  obj.f(184);
  obj.f(185);
  obj.f(186);
  obj.f(187);
  obj.f(188);
  obj.f(189);
  obj.f(190);
  obj.f(191);
  obj.f(192);
  obj.f(193);
  obj.f(194);
  obj.f(195);
  obj.f(196);
  obj.f(197);
  obj.f(198);
  obj.f(199);
  obj.f(200);
  obj.f(201);
  obj.f(202);
  obj.f(203);
  obj.f(204);
  obj.f(205);
  obj.f(206);
  obj.f(207);
  obj.f(208);
  obj.f(209);
  obj.f(210);
  obj.f(211);
  obj.f(212);
  obj.f(213);
  obj.f(214);
  obj.f(215);
  obj.f(216);
  obj.f(217);
  obj.f(218);
  obj.f(219);
  obj.f(220);
  obj.f(221);
  obj.f(222);
  obj.f(223);
  obj.f(224);
  obj.f(225);
  obj.f(226);
  obj.f(227);
  obj.f(228);
  obj.f(229);
  obj.f(230);
  obj.f(231);
  obj.f(232);
  obj.f(233);
  obj.f(234);
  obj.f(235);
  obj.f(236);
  obj.f(237);
  obj.f(238);
  obj.f(239);
  obj.f(240);
  obj.f(241);
  obj.f(242);
  obj.f(243);
  obj.f(244);
  obj.f(245);
  obj.f(246);
  obj.f(247);
  obj.f(248);
  obj.f(249);
  obj.f(250);
  obj.f(251);
  obj.f(252);
  obj.f(253);
  obj.f(254);
  obj.f(255);
  debugger;
  obj.f(256);
  obj.f(257);
  obj.f(258);
  obj.f(259);
}

let break_count = 0;

function listener(event, exec_state, event_data, data) {
  if (event != debug.Debug.DebugEvent.Break) return;
  try {
    exec_state.prepareStep(debug.Debug.StepAction.StepOver);
    break_count++;
  } catch {
    %AbortJS("unexpected exception");
  }
}

debug.Debug.setListener(listener);
foo();
debug.Debug.setListener(null);
assertEquals(7, break_count);
