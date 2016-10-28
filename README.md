# video-bot

Módulo para o concurso do ChatClub (setembro/2016)

## Proposta

Distribuir conteúdo na forma de vídeos dentro do Messenger. Até então, outros módulos/bots possuem link para o vídeo no YouTube. O usuário é redirecionado para fora do Messenger e, uma vez no YouTube, está esposto a diversos outros links: recomendações, comentários, etc.

## Solução

Utilizar webview e "tunar" o player do Youtube para oferecer a experiência mais próxima possível de um vídeo "embedded".
Também é possível utilizar Messeger Extensions (habilitada nesse teste) para realizar algum controle de acesso ou extração de métrica.
Infelizmente, o "autoplay" não é permitido em dispositivos móveis.

## Próximos passos

Oferecer vídeos de outras plataformas como Vimeo, DailyMotion, Facebook, etc., seguindo o mesmo princípio.
