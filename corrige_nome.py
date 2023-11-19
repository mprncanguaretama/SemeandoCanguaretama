
import os

diretorio = r"C:\Users\User\Desktop\fotos"
arquivos = os.listdir(diretorio)

nome = "mirante"

for i, arquivo in enumerate(arquivos):
    caminho_completo = os.path.join(diretorio, arquivo)
    nome_novo = os.path.join(diretorio, f"{nome}_{i}.jpeg")
    os.rename(caminho_completo, nome_novo)

    print(arquivo)  # Isso imprimirá o nome original do arquivo
