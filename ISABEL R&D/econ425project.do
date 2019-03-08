gen trend=_n

tsset trend

gen r_f=d.p_f/l.p_f

gen r_fb=d.p_fb/l.p_fb

gen r_fit=d.p_fit/l.p_fit

gen r_gpro=d.p_gpro/l.p_gpro

gen r_nike=d.p_nike/l.p_nike

gen r_sp=d.p_sp/l.p_sp

reg r_f l.r_f r_sp l.r_sp l2.r_sp

estat ic

dfuller p_f, regress lag(2)

dfuller p_fb, regress lag(2)

dfuller p_fit, regress lag(2)

dfuller p_gpro, regress lag(2)

dfuller p_nike, regress lag(2)

dfuller r_f, regress lag(2)

dfuller r_fb, regress lag(2)

dfuller r_fit, regress lag(2)

dfuller r_gpro, regress lag(2)

dfuller r_nike, regress lag(2)

reg p_f p_sp

predict sf, resid

reg p_fb p_sp

predict sfb, resid

reg p_fit p_sp

predict sfit, resid

reg p_gpro p_sp

predict sgpro, resid

reg p_nike p_sp

predict snike, resid

