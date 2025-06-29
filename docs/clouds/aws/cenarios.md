# Resumo de Cenários – Quando Usar Cada Serviço AWS (SAA-C03)

## 📦 Armazenamento

| Cenário                                                | Serviço Ideal                | Motivo                                                   |
| ------------------------------------------------------ | ---------------------------- | -------------------------------------------------------- |
| Armazenar objetos (imagens, vídeos, backups)           | **Amazon S3**                | Escalável, durável, ideal para arquivos não estruturados |
| Arquivos acessados com baixa frequência                | **S3 Standard-IA / Glacier** | Redução de custos com SLA ajustado                       |
| Armazenar arquivos com acesso por sistema legado (NFS) | **Amazon EFS**               | Armazenamento de arquivos compartilhados para Linux      |
| Armazenamento em bloco de alta performance             | **Amazon EBS**               | Ideal para EC2, como disco virtual                       |

---

## 💻 Computação

| Cenário                      | Serviço Ideal                       | Motivo                                                 |
| ---------------------------- | ----------------------------------- | ------------------------------------------------------ |
| Aplicações web escaláveis    | **Amazon EC2 + Auto Scaling + ELB** | Controle completo com escalabilidade                   |
| Aplicações sem servidor      | **AWS Lambda**                      | Executa código sob demanda, sem provisionamento        |
| Containers simples e rápidos | **AWS Fargate**                     | Container serverless com baixo overhead                |
| Orquestração de containers   | **Amazon ECS ou EKS**               | ECS (gerenciado), EKS (Kubernetes) para microsserviços |

---

## 🗄️ Banco de Dados

| Cenário                                  | Serviço Ideal                            | Motivo                                 |
| ---------------------------------------- | ---------------------------------------- | -------------------------------------- |
| Dados relacionais, estrutura fixa        | **Amazon RDS (MySQL/PostgreSQL)**        | Gerenciado, backup e failover inclusos |
| Alta performance relacional              | **Amazon Aurora**                        | Multi-AZ, leitura escalável            |
| Dados não-relacionais com baixa latência | **Amazon DynamoDB**                      | NoSQL totalmente gerenciado            |
| Caching de dados frequentes              | **Amazon ElastiCache (Redis/Memcached)** | Latência reduzida com acesso rápido    |

---

## 🔐 Segurança e Gerenciamento de Acesso

| Cenário                          | Serviço Ideal           | Motivo                                      |
| -------------------------------- | ----------------------- | ------------------------------------------- |
| Gerenciar acesso e permissões    | **AWS IAM**             | Políticas detalhadas e controle de usuários |
| Armazenar segredos com segurança | **AWS Secrets Manager** | Rotação automática e controle de acesso     |
| Gerenciar criptografia           | **AWS KMS**             | Chaves gerenciadas com segurança e controle |

---

## 🌐 Rede e Entrega de Conteúdo

| Cenário                        | Serviço Ideal                                   | Motivo                                     |
| ------------------------------ | ----------------------------------------------- | ------------------------------------------ |
| Balanceamento de carga         | **Elastic Load Balancer (ELB)**                 | Distribui tráfego de forma automática      |
| DNS gerenciado e failover      | **Amazon Route 53**                             | Alta disponibilidade e roteamento avançado |
| Cache e entrega global         | **Amazon CloudFront**                           | CDN para menor latência                    |
| Comunicação privada entre VPCs | **VPC Peering / PrivateLink / Transit Gateway** | Comunicação segura entre redes             |

---

## 📡 Comunicação Assíncrona

| Cenário                     | Serviço Ideal          | Motivo                                    |
| --------------------------- | ---------------------- | ----------------------------------------- |
| Notificações entre serviços | **Amazon SNS**         | Comunicação pub/sub simples e rápida      |
| Filas entre microsserviços  | **Amazon SQS**         | Fila desacoplada, tolerante a falhas      |
| Roteamento de eventos       | **Amazon EventBridge** | Comunicação entre serviços AWS e externos |

---

## 📊 Monitoramento e Custos

| Cenário                         | Serviço Ideal                   | Motivo                           |
| ------------------------------- | ------------------------------- | -------------------------------- |
| Monitorar aplicações            | **Amazon CloudWatch**           | Métricas, logs, alarmes          |
| Auditoria de chamadas e acessos | **AWS CloudTrail**              | Rastreabilidade e segurança      |
| Controle de gastos              | **Cost Explorer / AWS Budgets** | Análise e planejamento de custos |

---

## 🔄 Alta Disponibilidade e DR

| Cenário                         | Serviço Ideal                    | Motivo                               |
| ------------------------------- | -------------------------------- | ------------------------------------ |
| Failover entre regiões          | **Route 53 + S3 Replication**    | Redundância geográfica e recuperação |
| Multi-AZ para bancos de dados   | **RDS Multi-AZ / Aurora Global** | Alta disponibilidade e resiliência   |
| Estratégia de Disaster Recovery | **Backup + Warm Standby**        | Redução de RTO e RPO                 |

---

