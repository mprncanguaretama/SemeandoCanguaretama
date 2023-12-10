
import os

diretorio = r"F:\Users\rafae\PycharmProjects\html_aula\imagens\santuario_tartaruga"
arquivos = os.listdir(diretorio)

nome = "tartaruga"

for i, arquivo in enumerate(arquivos):
    caminho_completo = os.path.join(diretorio, arquivo)
    nome_novo = os.path.join(diretorio, f"{nome}_{i}.jpeg")
    os.rename(caminho_completo, nome_novo)

    print(arquivo)  # Isso imprimirá o nome original do arquivo
