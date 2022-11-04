Question: 1
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

if (_.isEqual(obj1, obj2)) {
    console.log("Both JSON Objects are same");
} else {
    console.log("Both JSON Objects are not same ")
}

Question: 2
let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.onload = function () {

    let result = JSON.parse(request.response);

    for (i = 0; i < result.length; i++) {

        console.log(result[i].flags);
    }

    // console.log(result.country flag)

}
request.onerror = function () {
    console.log("Something went wrong");
}
request.send();

// Output

{ png: 'https://flagcdn.com/w320/uy.png', svg: 'https://flagcdn.com/uy.svg' }
{ png: 'https://flagcdn.com/w320/py.png', svg: 'https://flagcdn.com/py.svg' }
{ png: 'https://flagcdn.com/w320/gm.png', svg: 'https://flagcdn.com/gm.svg' }
{ png: 'https://flagcdn.com/w320/dj.png', svg: 'https://flagcdn.com/dj.svg' }
{ png: 'https://flagcdn.com/w320/mq.png', svg: 'https://flagcdn.com/mq.svg' }
{ png: 'https://flagcdn.com/w320/gu.png', svg: 'https://flagcdn.com/gu.svg' }
{ png: 'https://flagcdn.com/w320/ge.png', svg: 'https://flagcdn.com/ge.svg' }
{ png: 'https://flagcdn.com/w320/us.png', svg: 'https://flagcdn.com/us.svg' }
{ png: 'https://flagcdn.com/w320/bz.png', svg: 'https://flagcdn.com/bz.svg' }
{ png: 'https://flagcdn.com/w320/mu.png', svg: 'https://flagcdn.com/mu.svg' }
{ png: 'https://flagcdn.com/w320/lb.png', svg: 'https://flagcdn.com/lb.svg' }
{ png: 'https://flagcdn.com/w320/sa.png', svg: 'https://flagcdn.com/sa.svg' }
{ png: 'https://flagcdn.com/w320/ec.png', svg: 'https://flagcdn.com/ec.svg' }
{ png: 'https://flagcdn.com/w320/mh.png', svg: 'https://flagcdn.com/mh.svg' }
{ png: 'https://flagcdn.com/w320/br.png', svg: 'https://flagcdn.com/br.svg' }
{ png: 'https://flagcdn.com/w320/ug.png', svg: 'https://flagcdn.com/ug.svg' }
{ png: 'https://flagcdn.com/w320/qa.png', svg: 'https://flagcdn.com/qa.svg' }
{ png: 'https://flagcdn.com/w320/tl.png', svg: 'https://flagcdn.com/tl.svg' }
{ png: 'https://flagcdn.com/w320/mn.png', svg: 'https://flagcdn.com/mn.svg' }
{ png: 'https://flagcdn.com/w320/cl.png', svg: 'https://flagcdn.com/cl.svg' }
{ png: 'https://flagcdn.com/w320/lr.png', svg: 'https://flagcdn.com/lr.svg' }
{ png: 'https://flagcdn.com/w320/nr.png', svg: 'https://flagcdn.com/nr.svg' }
{ png: 'https://flagcdn.com/w320/re.png', svg: 'https://flagcdn.com/re.svg' }
{ png: 'https://flagcdn.com/w320/ms.png', svg: 'https://flagcdn.com/ms.svg' }
{ png: 'https://flagcdn.com/w320/tw.png', svg: 'https://flagcdn.com/tw.svg' }
{ png: 'https://flagcdn.com/w320/aq.png', svg: 'https://flagcdn.com/aq.svg' }
{ png: 'https://flagcdn.com/w320/pm.png', svg: 'https://flagcdn.com/pm.svg' }
{ png: 'https://flagcdn.com/w320/ar.png', svg: 'https://flagcdn.com/ar.svg' }
{ png: 'https://flagcdn.com/w320/tg.png', svg: 'https://flagcdn.com/tg.svg' }
{ png: 'https://flagcdn.com/w320/at.png', svg: 'https://flagcdn.com/at.svg' }
{ png: 'https://flagcdn.com/w320/gd.png', svg: 'https://flagcdn.com/gd.svg' }
{ png: 'https://flagcdn.com/w320/fo.png', svg: 'https://flagcdn.com/fo.svg' }
{ png: 'https://flagcdn.com/w320/ma.png', svg: 'https://flagcdn.com/ma.svg' }
{ png: 'https://flagcdn.com/w320/ai.png', svg: 'https://flagcdn.com/ai.svg' }
{ png: 'https://flagcdn.com/w320/pw.png', svg: 'https://flagcdn.com/pw.svg' }
{ png: 'https://flagcdn.com/w320/mp.png', svg: 'https://flagcdn.com/mp.svg' }
{ png: 'https://flagcdn.com/w320/mr.png', svg: 'https://flagcdn.com/mr.svg' }
{ png: 'https://flagcdn.com/w320/ua.png', svg: 'https://flagcdn.com/ua.svg' }
{ png: 'https://flagcdn.com/w320/cn.png', svg: 'https://flagcdn.com/cn.svg' }
{ png: 'https://flagcdn.com/w320/ls.png', svg: 'https://flagcdn.com/ls.svg' }
{ png: 'https://flagcdn.com/w320/cy.png', svg: 'https://flagcdn.com/cy.svg' }
{ png: 'https://flagcdn.com/w320/cd.png', svg: 'https://flagcdn.com/cd.svg' }
{ png: 'https://flagcdn.com/w320/ru.png', svg: 'https://flagcdn.com/ru.svg' }
{ png: 'https://flagcdn.com/w320/bd.png', svg: 'https://flagcdn.com/bd.svg' }
{ png: 'https://flagcdn.com/w320/za.png', svg: 'https://flagcdn.com/za.svg' }
{ png: 'https://flagcdn.com/w320/cw.png', svg: 'https://flagcdn.com/cw.svg' }
{ png: 'https://flagcdn.com/w320/gt.png', svg: 'https://flagcdn.com/gt.svg' }
{ png: 'https://flagcdn.com/w320/pr.png', svg: 'https://flagcdn.com/pr.svg' }
{ png: 'https://flagcdn.com/w320/ag.png', svg: 'https://flagcdn.com/ag.svg' }
{ png: 'https://flagcdn.com/w320/il.png', svg: 'https://flagcdn.com/il.svg' }
{ png: 'https://flagcdn.com/w320/gy.png', svg: 'https://flagcdn.com/gy.svg' }
{ png: 'https://flagcdn.com/w320/ky.png', svg: 'https://flagcdn.com/ky.svg' }
{ png: 'https://flagcdn.com/w320/hr.png', svg: 'https://flagcdn.com/hr.svg' }
{ png: 'https://flagcdn.com/w320/is.png', svg: 'https://flagcdn.com/is.svg' }
{ png: 'https://flagcdn.com/w320/bq.png', svg: 'https://flagcdn.com/bq.svg' }
{ png: 'https://flagcdn.com/w320/sx.png', svg: 'https://flagcdn.com/sx.svg' }
{ png: 'https://flagcdn.com/w320/na.png', svg: 'https://flagcdn.com/na.svg' }
{ png: 'https://flagcdn.com/w320/dm.png', svg: 'https://flagcdn.com/dm.svg' }
{ png: 'https://flagcdn.com/w320/gi.png', svg: 'https://flagcdn.com/gi.svg' }
{ png: 'https://flagcdn.com/w320/sn.png', svg: 'https://flagcdn.com/sn.svg' }
{ png: 'https://flagcdn.com/w320/kn.png', svg: 'https://flagcdn.com/kn.svg' }
{ png: 'https://flagcdn.com/w320/om.png', svg: 'https://flagcdn.com/om.svg' }
{ png: 'https://flagcdn.com/w320/kw.png', svg: 'https://flagcdn.com/kw.svg' }
{ png: 'https://flagcdn.com/w320/ax.png', svg: 'https://flagcdn.com/ax.svg' }
{ png: 'https://flagcdn.com/w320/vi.png', svg: 'https://flagcdn.com/vi.svg' }
{ png: 'https://flagcdn.com/w320/bv.png', svg: 'https://flagcdn.com/bv.svg' }
{ png: 'https://flagcdn.com/w320/gb.png', svg: 'https://flagcdn.com/gb.svg' }
{ png: 'https://flagcdn.com/w320/hn.png', svg: 'https://flagcdn.com/hn.svg' }
{ png: 'https://flagcdn.com/w320/gs.png', svg: 'https://flagcdn.com/gs.svg' }
{ png: 'https://flagcdn.com/w320/kh.png', svg: 'https://flagcdn.com/kh.svg' }
{ png: 'https://flagcdn.com/w320/mk.png', svg: 'https://flagcdn.com/mk.svg' }
{ png: 'https://flagcdn.com/w320/ir.png', svg: 'https://flagcdn.com/ir.svg' }
{ png: 'https://flagcdn.com/w320/pa.png', svg: 'https://flagcdn.com/pa.svg' }
{ png: 'https://flagcdn.com/w320/ck.png', svg: 'https://flagcdn.com/ck.svg' }
{ png: 'https://flagcdn.com/w320/ad.png', svg: 'https://flagcdn.com/ad.svg' }
{ png: 'https://flagcdn.com/w320/bi.png', svg: 'https://flagcdn.com/bi.svg' }
{ png: 'https://flagcdn.com/w320/tt.png', svg: 'https://flagcdn.com/tt.svg' }
{ png: 'https://flagcdn.com/w320/km.png', svg: 'https://flagcdn.com/km.svg' }
{ png: 'https://flagcdn.com/w320/tf.png', svg: 'https://flagcdn.com/tf.svg' }
{ png: 'https://flagcdn.com/w320/xk.png', svg: 'https://flagcdn.com/xk.svg' }
{ png: 'https://flagcdn.com/w320/ng.png', svg: 'https://flagcdn.com/ng.svg' }
{ png: 'https://flagcdn.com/w320/pl.png', svg: 'https://flagcdn.com/pl.svg' }
{ png: 'https://flagcdn.com/w320/nu.png', svg: 'https://flagcdn.com/nu.svg' }
{ png: 'https://flagcdn.com/w320/nc.png', svg: 'https://flagcdn.com/nc.svg' }
{ png: 'https://flagcdn.com/w320/et.png', svg: 'https://flagcdn.com/et.svg' }
{ png: 'https://flagcdn.com/w320/de.png', svg: 'https://flagcdn.com/de.svg' }
{ png: 'https://flagcdn.com/w320/az.png', svg: 'https://flagcdn.com/az.svg' }
{ png: 'https://flagcdn.com/w320/nl.png', svg: 'https://flagcdn.com/nl.svg' }
{ png: 'https://flagcdn.com/w320/fr.png', svg: 'https://flagcdn.com/fr.svg' }
{ png: 'https://flagcdn.com/w320/np.png', svg: 'https://flagcdn.com/np.svg' }
{ png: 'https://flagcdn.com/w320/bb.png', svg: 'https://flagcdn.com/bb.svg' }
{ png: 'https://flagcdn.com/w320/je.png', svg: 'https://flagcdn.com/je.svg' }
{ png: 'https://flagcdn.com/w320/in.png', svg: 'https://flagcdn.com/in.svg' }
{ png: 'https://flagcdn.com/w320/kg.png', svg: 'https://flagcdn.com/kg.svg' }
{ png: 'https://flagcdn.com/w320/ss.png', svg: 'https://flagcdn.com/ss.svg' }
{ png: 'https://flagcdn.com/w320/iq.png', svg: 'https://flagcdn.com/iq.svg' }
{ png: 'https://flagcdn.com/w320/it.png', svg: 'https://flagcdn.com/it.svg' }
{ png: 'https://flagcdn.com/w320/cu.png', svg: 'https://flagcdn.com/cu.svg' }
{ png: 'https://flagcdn.com/w320/bt.png', svg: 'https://flagcdn.com/bt.svg' }
{ png: 'https://flagcdn.com/w320/bs.png', svg: 'https://flagcdn.com/bs.svg' }
{ png: 'https://flagcdn.com/w320/no.png', svg: 'https://flagcdn.com/no.svg' }
{ png: 'https://flagcdn.com/w320/lt.png', svg: 'https://flagcdn.com/lt.svg' }
{ png: 'https://flagcdn.com/w320/ke.png', svg: 'https://flagcdn.com/ke.svg' }
{ png: 'https://flagcdn.com/w320/pn.png', svg: 'https://flagcdn.com/pn.svg' }
{ png: 'https://flagcdn.com/w320/se.png', svg: 'https://flagcdn.com/se.svg' }
{ png: 'https://flagcdn.com/w320/gp.png', svg: 'https://flagcdn.com/gp.svg' }
{ png: 'https://flagcdn.com/w320/ga.png', svg: 'https://flagcdn.com/ga.svg' }
{ png: 'https://flagcdn.com/w320/mo.png', svg: 'https://flagcdn.com/mo.svg' }
{ png: 'https://flagcdn.com/w320/gg.png', svg: 'https://flagcdn.com/gg.svg' }
{ png: 'https://flagcdn.com/w320/rw.png', svg: 'https://flagcdn.com/rw.svg' }
{ png: 'https://flagcdn.com/w320/sy.png', svg: 'https://flagcdn.com/sy.svg' }
{ png: 'https://flagcdn.com/w320/ca.png', svg: 'https://flagcdn.com/ca.svg' }
{ png: 'https://flagcdn.com/w320/dz.png', svg: 'https://flagcdn.com/dz.svg' }
{ png: 'https://flagcdn.com/w320/io.png', svg: 'https://flagcdn.com/io.svg' }
{ png: 'https://flagcdn.com/w320/eh.png', svg: 'https://flagcdn.com/eh.svg' }
{ png: 'https://flagcdn.com/w320/im.png', svg: 'https://flagcdn.com/im.svg' }
{ png: 'https://flagcdn.com/w320/bw.png', svg: 'https://flagcdn.com/bw.svg' }
{ png: 'https://flagcdn.com/w320/kz.png', svg: 'https://flagcdn.com/kz.svg' }
{ png: 'https://flagcdn.com/w320/ve.png', svg: 'https://flagcdn.com/ve.svg' }
{ png: 'https://flagcdn.com/w320/pf.png', svg: 'https://flagcdn.com/pf.svg' }
{ png: 'https://flagcdn.com/w320/sd.png', svg: 'https://flagcdn.com/sd.svg' }
{ png: 'https://flagcdn.com/w320/wf.png', svg: 'https://flagcdn.com/wf.svg' }
{ png: 'https://flagcdn.com/w320/sk.png', svg: 'https://flagcdn.com/sk.svg' }
{ png: 'https://flagcdn.com/w320/bl.png', svg: 'https://flagcdn.com/bl.svg' }
{ png: 'https://flagcdn.com/w320/cx.png', svg: 'https://flagcdn.com/cx.svg' }
{ png: 'https://flagcdn.com/w320/sb.png', svg: 'https://flagcdn.com/sb.svg' }
{ png: 'https://flagcdn.com/w320/lv.png', svg: 'https://flagcdn.com/lv.svg' }
{ png: 'https://flagcdn.com/w320/vg.png', svg: 'https://flagcdn.com/vg.svg' }
{ png: 'https://flagcdn.com/w320/jm.png', svg: 'https://flagcdn.com/jm.svg' }
{ png: 'https://upload.wikimedia.org/wikipedia/commons/thu…the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png', svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg' }
{ png: 'https://flagcdn.com/w320/rs.png', svg: 'https://flagcdn.com/rs.svg' }
{ png: 'https://flagcdn.com/w320/tj.png', svg: 'https://flagcdn.com/tj.svg' }
{ png: 'https://flagcdn.com/w320/to.png', svg: 'https://flagcdn.com/to.svg' }
{ png: 'https://flagcdn.com/w320/ki.png', svg: 'https://flagcdn.com/ki.svg' }
{ png: 'https://flagcdn.com/w320/er.png', svg: 'https://flagcdn.com/er.svg' }
{ png: 'https://flagcdn.com/w320/ml.png', svg: 'https://flagcdn.com/ml.svg' }
{ png: 'https://flagcdn.com/w320/ht.png', svg: 'https://flagcdn.com/ht.svg' }
{ png: 'https://flagcdn.com/w320/vu.png', svg: 'https://flagcdn.com/vu.svg' }
{ png: 'https://flagcdn.com/w320/ba.png', svg: 'https://flagcdn.com/ba.svg' }
{ png: 'https://flagcdn.com/w320/va.png', svg: 'https://flagcdn.com/va.svg' }
{ png: 'https://flagcdn.com/w320/bj.png', svg: 'https://flagcdn.com/bj.svg' }
{ png: 'https://flagcdn.com/w320/sj.png', svg: 'https://flagcdn.com/sj.svg' }
{ png: 'https://flagcdn.com/w320/ws.png', svg: 'https://flagcdn.com/ws.svg' }
{ png: 'https://flagcdn.com/w320/bo.png', svg: 'https://flagcdn.com/bo.svg' }
{ png: 'https://flagcdn.com/w320/mg.png', svg: 'https://flagcdn.com/mg.svg' }
{ png: 'https://flagcdn.com/w320/st.png', svg: 'https://flagcdn.com/st.svg' }
{ png: 'https://flagcdn.com/w320/bh.png', svg: 'https://flagcdn.com/bh.svg' }
{ png: 'https://flagcdn.com/w320/gr.png', svg: 'https://flagcdn.com/gr.svg' }
{ png: 'https://flagcdn.com/w320/pe.png', svg: 'https://flagcdn.com/pe.svg' }
{ png: 'https://flagcdn.com/w320/sr.png', svg: 'https://flagcdn.com/sr.svg' }
{ png: 'https://flagcdn.com/w320/as.png', svg: 'https://flagcdn.com/as.svg' }
{ png: 'https://flagcdn.com/w320/ne.png', svg: 'https://flagcdn.com/ne.svg' }
{ png: 'https://flagcdn.com/w320/th.png', svg: 'https://flagcdn.com/th.svg' }
{ png: 'https://flagcdn.com/w320/tv.png', svg: 'https://flagcdn.com/tv.svg' }
{ png: 'https://flagcdn.com/w320/kp.png', svg: 'https://flagcdn.com/kp.svg' }
{ png: 'https://flagcdn.com/w320/ci.png', svg: 'https://flagcdn.com/ci.svg' }
{ png: 'https://flagcdn.com/w320/ye.png', svg: 'https://flagcdn.com/ye.svg' }
{ png: 'https://flagcdn.com/w320/nz.png', svg: 'https://flagcdn.com/nz.svg' }
{ png: 'https://flagcdn.com/w320/am.png', svg: 'https://flagcdn.com/am.svg' }
{ png: 'https://flagcdn.com/w320/pk.png', svg: 'https://flagcdn.com/pk.svg' }
{ png: 'https://flagcdn.com/w320/tk.png', svg: 'https://flagcdn.com/tk.svg' }
{ png: 'https://flagcdn.com/w320/mw.png', svg: 'https://flagcdn.com/mw.svg' }
{ png: 'https://flagcdn.com/w320/ie.png', svg: 'https://flagcdn.com/ie.svg' }
{ png: 'https://flagcdn.com/w320/ph.png', svg: 'https://flagcdn.com/ph.svg' }
{ png: 'https://flagcdn.com/w320/cz.png', svg: 'https://flagcdn.com/cz.svg' }
{ png: 'https://flagcdn.com/w320/mm.png', svg: 'https://flagcdn.com/mm.svg' }
{ png: 'https://flagcdn.com/w320/cc.png', svg: 'https://flagcdn.com/cc.svg' }
{ png: 'https://flagcdn.com/w320/ro.png', svg: 'https://flagcdn.com/ro.svg' }
{ png: 'https://flagcdn.com/w320/do.png', svg: 'https://flagcdn.com/do.svg' }
{ png: 'https://flagcdn.com/w320/gq.png', svg: 'https://flagcdn.com/gq.svg' }
{ png: 'https://flagcdn.com/w320/gh.png', svg: 'https://flagcdn.com/gh.svg' }
{ png: 'https://flagcdn.com/w320/mt.png', svg: 'https://flagcdn.com/mt.svg' }
{ png: 'https://flagcdn.com/w320/tr.png', svg: 'https://flagcdn.com/tr.svg' }
{ png: 'https://flagcdn.com/w320/eg.png', svg: 'https://flagcdn.com/eg.svg' }
{ png: 'https://flagcdn.com/w320/mz.png', svg: 'https://flagcdn.com/mz.svg' }
{ png: 'https://flagcdn.com/w320/yt.png', svg: 'https://flagcdn.com/yt.svg' }
{ png: 'https://flagcdn.com/w320/be.png', svg: 'https://flagcdn.com/be.svg' }
{ png: 'https://flagcdn.com/w320/si.png', svg: 'https://flagcdn.com/si.svg' }
{ png: 'https://flagcdn.com/w320/hu.png', svg: 'https://flagcdn.com/hu.svg' }
{ png: 'https://flagcdn.com/w320/ae.png', svg: 'https://flagcdn.com/ae.svg' }
{ png: 'https://flagcdn.com/w320/al.png', svg: 'https://flagcdn.com/al.svg' }
{ png: 'https://flagcdn.com/w320/hm.png', svg: 'https://flagcdn.com/hm.svg' }
{ png: 'https://flagcdn.com/w320/fj.png', svg: 'https://flagcdn.com/fj.svg' }
{ png: 'https://flagcdn.com/w320/sm.png', svg: 'https://flagcdn.com/sm.svg' }
{ png: 'https://flagcdn.com/w320/md.png', svg: 'https://flagcdn.com/md.svg' }
{ png: 'https://flagcdn.com/w320/ee.png', svg: 'https://flagcdn.com/ee.svg' }
{ png: 'https://flagcdn.com/w320/vc.png', svg: 'https://flagcdn.com/vc.svg' }
{ png: 'https://flagcdn.com/w320/um.png', svg: 'https://flagcdn.com/um.svg' }
{ png: 'https://flagcdn.com/w320/by.png', svg: 'https://flagcdn.com/by.svg' }
{ png: 'https://flagcdn.com/w320/lk.png', svg: 'https://flagcdn.com/lk.svg' }
{ png: 'https://flagcdn.com/w320/sv.png', svg: 'https://flagcdn.com/sv.svg' }
{ png: 'https://flagcdn.com/w320/au.png', svg: 'https://flagcdn.com/au.svg' }
{ png: 'https://flagcdn.com/w320/bm.png', svg: 'https://flagcdn.com/bm.svg' }
{ png: 'https://flagcdn.com/w320/ni.png', svg: 'https://flagcdn.com/ni.svg' }
{ png: 'https://flagcdn.com/w320/so.png', svg: 'https://flagcdn.com/so.svg' }
{ png: 'https://flagcdn.com/w320/tc.png', svg: 'https://flagcdn.com/tc.svg' }
{ png: 'https://flagcdn.com/w320/fm.png', svg: 'https://flagcdn.com/fm.svg' }
{ png: 'https://flagcdn.com/w320/ps.png', svg: 'https://flagcdn.com/ps.svg' }
{ png: 'https://flagcdn.com/w320/tm.png', svg: 'https://flagcdn.com/tm.svg' }
{ png: 'https://flagcdn.com/w320/bf.png', svg: 'https://flagcdn.com/bf.svg' }
{ png: 'https://flagcdn.com/w320/cr.png', svg: 'https://flagcdn.com/cr.svg' }
{ png: 'https://flagcdn.com/w320/vn.png', svg: 'https://flagcdn.com/vn.svg' }
{ png: 'https://flagcdn.com/w320/cm.png', svg: 'https://flagcdn.com/cm.svg' }
{ png: 'https://flagcdn.com/w320/gf.png', svg: 'https://flagcdn.com/gf.svg' }
{ png: 'https://flagcdn.com/w320/sz.png', svg: 'https://flagcdn.com/sz.svg' }
{ png: 'https://flagcdn.com/w320/zm.png', svg: 'https://flagcdn.com/zm.svg' }
{ png: 'https://flagcdn.com/w320/li.png', svg: 'https://flagcdn.com/li.svg' }
{ png: 'https://flagcdn.com/w320/me.png', svg: 'https://flagcdn.com/me.svg' }
{ png: 'https://flagcdn.com/w320/lc.png', svg: 'https://flagcdn.com/lc.svg' }
{ png: 'https://flagcdn.com/w320/uz.png', svg: 'https://flagcdn.com/uz.svg' }
{ png: 'https://flagcdn.com/w320/td.png', svg: 'https://flagcdn.com/td.svg' }
{ png: 'https://flagcdn.com/w320/aw.png', svg: 'https://flagcdn.com/aw.svg' }
{ png: 'https://flagcdn.com/w320/dk.png', svg: 'https://flagcdn.com/dk.svg' }
{ png: 'https://flagcdn.com/w320/jp.png', svg: 'https://flagcdn.com/jp.svg' }
{ png: 'https://flagcdn.com/w320/cv.png', svg: 'https://flagcdn.com/cv.svg' }
{ png: 'https://flagcdn.com/w320/ch.png', svg: 'https://flagcdn.com/ch.svg' }
{ png: 'https://flagcdn.com/w320/hk.png', svg: 'https://flagcdn.com/hk.svg' }
{ png: 'https://flagcdn.com/w320/bg.png', svg: 'https://flagcdn.com/bg.svg' }
{ png: 'https://flagcdn.com/w320/jo.png', svg: 'https://flagcdn.com/jo.svg' }
{ png: 'https://flagcdn.com/w320/cg.png', svg: 'https://flagcdn.com/cg.svg' }
{ png: 'https://flagcdn.com/w320/la.png', svg: 'https://flagcdn.com/la.svg' }
{ png: 'https://flagcdn.com/w320/nf.png', svg: 'https://flagcdn.com/nf.svg' }
{ png: 'https://flagcdn.com/w320/kr.png', svg: 'https://flagcdn.com/kr.svg' }
{ png: 'https://flagcdn.com/w320/tn.png', svg: 'https://flagcdn.com/tn.svg' }
{ png: 'https://flagcdn.com/w320/fi.png', svg: 'https://flagcdn.com/fi.svg' }
{ png: 'https://flagcdn.com/w320/zw.png', svg: 'https://flagcdn.com/zw.svg' }
{ png: 'https://flagcdn.com/w320/mv.png', svg: 'https://flagcdn.com/mv.svg' }
{ png: 'https://flagcdn.com/w320/sg.png', svg: 'https://flagcdn.com/sg.svg' }
{ png: 'https://flagcdn.com/w320/mc.png', svg: 'https://flagcdn.com/mc.svg' }
{ png: 'https://flagcdn.com/w320/ao.png', svg: 'https://flagcdn.com/ao.svg' }
{ png: 'https://flagcdn.com/w320/my.png', svg: 'https://flagcdn.com/my.svg' }
{ png: 'https://flagcdn.com/w320/lu.png', svg: 'https://flagcdn.com/lu.svg' }
{ png: 'https://flagcdn.com/w320/gn.png', svg: 'https://flagcdn.com/gn.svg' }
{ png: 'https://flagcdn.com/w320/ly.png', svg: 'https://flagcdn.com/ly.svg' }
{ png: 'https://flagcdn.com/w320/es.png', svg: 'https://flagcdn.com/es.svg' }
{ png: 'https://flagcdn.com/w320/id.png', svg: 'https://flagcdn.com/id.svg' }
{ png: 'https://flagcdn.com/w320/sc.png', svg: 'https://flagcdn.com/sc.svg' }
{ png: 'https://flagcdn.com/w320/bn.png', svg: 'https://flagcdn.com/bn.svg' }
{ png: 'https://flagcdn.com/w320/mx.png', svg: 'https://flagcdn.com/mx.svg' }
{ png: 'https://flagcdn.com/w320/sh.png', svg: 'https://flagcdn.com/sh.svg' }
{ png: 'https://flagcdn.com/w320/sl.png', svg: 'https://flagcdn.com/sl.svg' }
{ png: 'https://flagcdn.com/w320/cf.png', svg: 'https://flagcdn.com/cf.svg' }
{ png: 'https://flagcdn.com/w320/gl.png', svg: 'https://flagcdn.com/gl.svg' }
{ png: 'https://flagcdn.com/w320/co.png', svg: 'https://flagcdn.com/co.svg' }
{ png: 'https://flagcdn.com/w320/pg.png', svg: 'https://flagcdn.com/pg.svg' }

// Question 3:
let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.onload = function () {

    let result = JSON.parse(request.response);

    for (i = 0; i < result.length; i++) {

        console.log(result[i].name);
        console.log(result[i].population);
        console.log(result[i].region);
        console.log(result[i].subregion);
    }

    // console.log(result.country flag)

}
request.onerror = function () {
    console.log("Something went wrong");
}
request.send();


	// There are two many lines in the output so kindly checkout in the console page


